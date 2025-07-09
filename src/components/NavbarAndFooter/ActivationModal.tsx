"use client";

import { useState } from "react";
import {
  CheckCircle,
  Zap,
  Crown,
  Award,
  Users,
  AlertCircle,
  PartyPopper,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { SubmitButton } from "../form/fields/SubmitButton";
import { TActiveAccount } from "@/types/activeAccountType/activeAccountType";
import { showErrorAlert } from "../shared/toast/ToastSuccess";

interface ActivationModalProps {
  children: React.ReactNode;
}

export function ActivationModal({ children }: ActivationModalProps) {
  const [isActivating, setIsActivating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const walletBalance = {
    usdt: "523.45",
    bizt: "1247.89",
  };

  const activationFee = 10;
  const hasEnoughBalance =
    Number.parseFloat(walletBalance.usdt) >= activationFee;

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.get<TActiveAccount>(
        `/active-account`
      );
      return response.data;
    },
    onSuccess: (data: TActiveAccount) => {
      if (data?.data?.status) {
        setShowSuccessDialog(true);
        setIsOpen(false);
      } else {
        showErrorAlert(data.data.message);
      }
      setIsActivating(false);
    },
    onError: () => {
      setIsActivating(false);
      showErrorAlert("Failed to activate account. Please try again.");
    },
  });

  const handleActive = () => {
    if (!hasEnoughBalance) return;
    setIsActivating(true);
    mutation.mutate();
  };

  return (
    <>
      {/* Activation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-sm mx-auto p-4">
          <DialogHeader className="text-center pb-2">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-black" />
              </div>
            </div>
            <DialogTitle className="text-xl font-bold text-white">
              Activate Account
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-sm">
              Thank you for choosing BIZNODE!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Activation Fee & Balance */}
            <Card className="bg-gray-700 border border-gray-600">
              <CardContent className="p-4">
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-yellow-400">
                    ${activationFee}
                  </div>
                  <p className="text-gray-300 text-xs">Activation Fee</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Available USDT:</span>
                    <span className="text-white font-bold">
                      ${walletBalance.usdt}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Available BIZT:</span>
                    <span className="text-white font-bold">
                      {walletBalance.bizt}
                    </span>
                  </div>
                </div>
                {!hasEnoughBalance && (
                  <div className="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded text-center">
                    <div className="flex items-center justify-center gap-1 text-red-400">
                      <AlertCircle className="w-3 h-3" />
                      <span className="text-xs">Insufficient USDT</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Unlock Features */}
            <Card className="bg-gray-700 border border-gray-600">
              <CardContent className="p-3">
                <h4 className="text-sm font-bold text-white mb-2">
                  {`You'll Unlock:`}
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-400" />
                    <span className="text-gray-300">Node Purchases</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-green-400" />
                    <span className="text-gray-300">Daily Rewards</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-blue-400" />
                    <span className="text-gray-300">Referral Bonus</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Crown className="w-3 h-3 text-purple-400" />
                    <span className="text-gray-300">Premium Tools</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info Note */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5" />
                <p className="text-blue-200 text-xs">
                  Activation required for node purchases and earning bonuses.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <DialogFooter className="flex flex-col gap-2 pt-2">
            <SubmitButton
              onClick={handleActive}
              disabled={!hasEnoughBalance}
              width="full"
              label={`Activate - $${activationFee}`}
              isLoading={isActivating}
              loadingLabel="Processing..."
              className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-2.5 text-sm disabled:opacity-50"
            />

            {!hasEnoughBalance && (
              <Button
                variant="outline"
                size="sm"
                className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent text-xs py-2"
                onClick={() => setIsOpen(false)}
              >
                Deposit USDT First
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-[#1e293b] border border-gray-700 text-white max-w-sm mx-auto p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
              <PartyPopper className="w-7 h-7 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-white">
            Congratulations! 🎉
          </DialogTitle>
          <DialogDescription className="text-green-400 mt-1 text-sm font-semibold">
            Account Successfully Activated!
          </DialogDescription>
          <p className="text-gray-300 mt-2 text-sm">
            Welcome to <span className="font-medium text-white">BIZNODE</span>!
            You can now purchase nodes and start earning rewards.
          </p>
          <DialogFooter className="mt-4">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
