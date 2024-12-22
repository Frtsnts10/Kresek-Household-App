"use client";

import React, { useRef } from "react";
import { Card, Switch } from "@nextui-org/react";
import { LogOut } from "lucide-react";

export default function Profile() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollEnd = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth; // Width of each card

    // Calculate the nearest card index
    const cardIndex = Math.round(scrollPosition / cardWidth);

    // Snap to the nearest card
    container.scrollTo({
      left: cardIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section
        className="sticky top-0 z-10 bg-[var(--background)] p-4 flex flex-row justify-between items-center border-b pb-4"
        style={{ borderBottom: "1px solid var(--border-gray)" }}>
        <h1 className="text-[24px] font-bold">User Settings</h1>
        <div className="cursor-pointer flex items-center">
          <LogOut size={24} />
        </div>
      </section>

      <div
        ref={scrollContainerRef}
        className=" p-6 gap-10 flex flex-row overflow-x-auto scrollbar-hide"
        onScroll={(e) => {
          // Debounce scrollEnd to avoid excessive snaps
          if (scrollContainerRef.current) {
            clearTimeout((scrollContainerRef.current as any).scrollTimeout);
            (scrollContainerRef.current as any).scrollTimeout = setTimeout(
              handleScrollEnd,
              150
            );
          }
        }}>
        {/* Profile Card */}
        <Card className="rounded-xl p-6 space-y-4 min-w-full flex-shrink-0 bg-[var(--card-bg)]">
          <img
            src="https://via.placeholder.com/150"
            alt="User Placeholder"
            className="w-50 h-50 m-auto rounded-full"
          />

          <div className="flex flex-col gap-2 w-full">
            <div className="text-center">
              <h2 className="text-lg font-bold">John Doe</h2>
              <p className="text-sm text-gray-500">johndoe@example.com</p>
            </div>

            <div className="flex flex-col gap-2 ">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
                Change Password
              </button>
            </div>
          </div>
        </Card>

        {/* QR Code Card */}
        <Card className="rounded-xl p-6 space-y-4 min-w-full flex-shrink-0 bg-[var(--card-bg)]">
          <h2 className="text-[24px] font-bold">Access Card</h2>

          <img
            src="https://via.placeholder.com/150"
            alt="QR Code Placeholder"
            className="w-50 h-50 m-auto"
          />
          <p className="text-[20px] text-gray-500 text-center">
            Scan this QR code to access.
          </p>
        </Card>
      </div>

      <Card className="bg-[var(--card-bg)] rounded-xl p-6 m-6 space-y-4">
        <h2 className="text-lg font-bold">Settings</h2>

        <ul className="list-none space-y-2">
          <li className="flex justify-between items-center">
            <span>Account Settings</span>
            <button className="text-blue-500 font-medium">Manage</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Privacy Settings</span>
            <button className="text-blue-500 font-medium">Edit</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Notification Settings</span>
            <button className="text-blue-500 font-medium">View</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Theme</span>
            <button className="text-blue-500 font-medium">Change</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Language</span>
            <button className="text-blue-500 font-medium">Select</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Subscription</span>
            <button className="text-blue-500 font-medium">View</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Security</span>
            <button className="text-blue-500 font-medium">Configure</button>
          </li>
        </ul>
      </Card>

      <Card className="bg-[var(--card-bg)] rounded-xl p-6 m-6 space-y-4">
        <h2 className="text-lg font-bold">Notification Preferences</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between gap-6">
            <h2>Email Notifications</h2>
            <Switch defaultSelected aria-label="Email Notification" />
          </div>
          <div className="flex flex-row justify-between gap-6">
            <h2>Email Notifications</h2>
            <Switch defaultSelected aria-label="Email Notification" />
          </div>
          <div className="flex flex-row justify-between gap-6">
            <h2>Email Notifications</h2>
            <Switch defaultSelected aria-label="Email Notification" />
          </div>
          <div className="flex flex-row justify-between gap-6">
            <h2>Email Notifications</h2>
            <Switch defaultSelected aria-label="Email Notification" />
          </div>
        </div>
      </Card>
    </main>
  );
}
