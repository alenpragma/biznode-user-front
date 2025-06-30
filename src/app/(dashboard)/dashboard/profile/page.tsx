"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Shield,
  Key,
  Bell,
  Globe,
  Camera,
  Edit3,
  Save,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    country: "United States",
    city: "New York",
    joinDate: "January 15, 2024",
    lastLogin: "2 hours ago",
  });

  const [securitySettings] = useState({
    twoFactorEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    loginAlerts: true,
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Profile Header */}
          <Card className="bg-gray-800 border-2 border-gray-600 mb-6 lg:mb-8">
            <CardContent className="p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                <div className="relative">
                  <Avatar className="w-20 h-20 lg:w-24 lg:h-24">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-xl lg:text-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-black">
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4 mb-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {profileData.firstName} {profileData.lastName}
                    </h3>
                    <div className="flex justify-center sm:justify-start gap-2">
                      <Badge className="bg-yellow-500 text-black">Gold</Badge>
                      <Badge className="bg-green-500 text-white">
                        KYC Verified
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm lg:text-base">
                    {profileData.email}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center sm:text-left">
                    <div>
                      <p className="text-gray-400 text-xs lg:text-sm">
                        Member Since
                      </p>
                      <p className="text-white font-bold text-sm lg:text-base">
                        {profileData.joinDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs lg:text-sm">
                        Last Login
                      </p>
                      <p className="text-white font-bold text-sm lg:text-base">
                        {profileData.lastLogin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 mb-6 lg:mb-8">
              <TabsTrigger
                value="personal"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-xs lg:text-sm"
              >
                <Edit3 className="w-4 h-4" />
                <span className="hidden sm:inline">Personal Info</span>
                <span className="sm:hidden">Personal</span>
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-xs lg:text-sm"
              >
                <Shield className="w-4 h-4" />
                Security
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-xs lg:text-sm"
              >
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Preferences</span>
                <span className="sm:hidden">Prefs</span>
              </TabsTrigger>
            </TabsList>

            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <Card className="bg-gray-800 border-2 border-gray-600">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <CardTitle className="text-white text-lg lg:text-xl font-bold">
                    Personal Information
                  </CardTitle>
                  {!isEditing ? (
                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black w-full sm:w-auto"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <Button
                        onClick={handleSaveProfile}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button
                        onClick={handleCancelEdit}
                        variant="outline"
                        className="border-gray-500 text-gray-300 hover:bg-gray-700 bg-transparent"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-white font-medium"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            firstName: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="bg-gray-700 border-gray-600 text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-white font-medium"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            lastName: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="bg-gray-700 border-gray-600 text-white disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          phone: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <Label
                        htmlFor="country"
                        className="text-white font-medium"
                      >
                        Country
                      </Label>
                      <Input
                        id="country"
                        value={profileData.country}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            country: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="bg-gray-700 border-gray-600 text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-white font-medium">
                        City
                      </Label>
                      <Input
                        id="city"
                        value={profileData.city}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            city: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="bg-gray-700 border-gray-600 text-white disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <Label className="text-white font-medium">
                        Member Since
                      </Label>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">
                          {profileData.joinDate}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-white font-medium">
                        Last Login
                      </Label>
                      <div className="flex items-center gap-2 mt-2">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">
                          {profileData.lastLogin}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <div className="space-y-4 lg:space-y-6">
                <Card className="bg-gray-800 border-2 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white text-lg lg:text-xl font-bold">
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 lg:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="text-white font-medium">
                            Two-Factor Authentication
                          </p>
                          <p className="text-gray-400 text-sm">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={
                          securitySettings.twoFactorEnabled
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                        }
                      >
                        {securitySettings.twoFactorEnabled
                          ? "Enabled"
                          : "Disabled"}
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Key className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="text-white font-medium">
                            Change Password
                          </p>
                          <p className="text-gray-400 text-sm">
                            Update your account password
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black w-full sm:w-auto bg-transparent"
                      >
                        Change
                      </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">Login Alerts</p>
                          <p className="text-gray-400 text-sm">
                            Get notified of new login attempts
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={
                          securitySettings.loginAlerts
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                        }
                      >
                        {securitySettings.loginAlerts ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-2 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white text-lg lg:text-xl font-bold">
                      Recent Security Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-gray-700">
                        <div>
                          <p className="text-white font-medium">
                            Login from New York, US
                          </p>
                          <p className="text-gray-400 text-sm">2 hours ago</p>
                        </div>
                        <Badge className="bg-green-500 text-white w-fit">
                          Success
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-gray-700">
                        <div>
                          <p className="text-white font-medium">
                            Password Changed
                          </p>
                          <p className="text-gray-400 text-sm">3 days ago</p>
                        </div>
                        <Badge className="bg-blue-500 text-white w-fit">
                          Security
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3">
                        <div>
                          <p className="text-white font-medium">2FA Enabled</p>
                          <p className="text-gray-400 text-sm">1 week ago</p>
                        </div>
                        <Badge className="bg-green-500 text-white w-fit">
                          Security
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences">
              <Card className="bg-gray-800 border-2 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg lg:text-xl font-bold">
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-white font-medium">
                          Email Notifications
                        </p>
                        <p className="text-gray-400 text-sm">
                          Receive updates via email
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={
                        securitySettings.emailNotifications
                          ? "bg-green-500 text-white"
                          : "bg-gray-500 text-white"
                      }
                    >
                      {securitySettings.emailNotifications
                        ? "Enabled"
                        : "Disabled"}
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white font-medium">
                          SMS Notifications
                        </p>
                        <p className="text-gray-400 text-sm">
                          Receive updates via SMS
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={
                        securitySettings.smsNotifications
                          ? "bg-green-500 text-white"
                          : "bg-gray-500 text-white"
                      }
                    >
                      {securitySettings.smsNotifications
                        ? "Enabled"
                        : "Disabled"}
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white font-medium">
                          Push Notifications
                        </p>
                        <p className="text-gray-400 text-sm">
                          Receive browser notifications
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black w-full sm:w-auto bg-transparent"
                    >
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
