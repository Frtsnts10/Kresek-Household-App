"use client";

import React from "react";
import { Badge, Card } from "@nextui-org/react";
import { CirclePlus } from "lucide-react";

export default function Task() {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <main className="flex flex-col">
      {/* Welcome Section */}
      <section
        className="sticky top-0 z-10 bg-[var(--background)] p-4 flex flex-row justify-between items-center border-b pb-4"
        style={{ borderBottom: "1px solid var(--border-gray)" }}>
        <h1 className="text-[24px] font-bold">Current Tasks</h1>

        <CirclePlus size={24} className="cursor-pointer" />
      </section>

      <section className="m-6 flex flex-col gap-6">
        {/* Stats Section */}
        <Card className="rounded-xl p-6">
          <div className="flex justify-evenly items-center">
            {/* Total Household */}
            <div className="flex flex-col items-center w-[200px]">
              <h2 className="text-[24px] font-bold">Total Household</h2>
              <span className="text-[18px]">4</span>
            </div>

            {/* Divider */}
            <div
              className="h-20 w-[1px] bg-gray-300 mx-4"
              style={{ backgroundColor: "var(--border-gray)" }}></div>

            {/* Active Now */}
            <div className="flex flex-col items-center w-[200px]">
              <h2 className="text-[24px] font-bold">Active Now</h2>
              <span className="text-[18px]">2</span>
            </div>
          </div>
        </Card>

        {/* Dues Section */}
        <Card className="rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-[24px]">Current Month</h2>

          {/* Main Content */}
          <div className="flex flex-col gap-2">
            {/* Amount Due */}
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-semibold">House Dues</span>
              <span className="text-[20px] font-bold text-red-600">$500</span>
            </div>

            {/* Status */}
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-semibold">Status</span>
              <span className="text-[20px] font-bold text-green-600">Paid</span>
            </div>

            {/* Due Date and Paid At */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold">Due Date</span>
                <span className="text-[18px] font-normal text-gray-500">
                  March 30, 2024
                </span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[18px] font-semibold">Paid At</span>
                <span className="text-[18px] font-normal text-gray-500">
                  March 28, 2024
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions Section */}
        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-[24px]">Quick Actions</h2>

          <div className="flex flex-row p-2 gap-6 overflow-x-auto scrollbar-hide">
            <Card className="p-4 flex flex-col items-center min-w-[150px]">
              <span className="font-bold text-blue-500">+ Add Member</span>
            </Card>
            <Card className="p-4 flex flex-col items-center min-w-[150px]">
              <span className="font-bold text-blue-500">+ Add Task</span>
            </Card>
            <Card className="p-4 flex flex-col items-center min-w-[150px]">
              <span className="font-bold text-blue-500">+ Add Expense</span>
            </Card>
            <Card className="p-4 flex flex-col items-center min-w-[150px]">
              <span className="font-bold text-blue-500">+ Add Event</span>
            </Card>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[24px] font-bold">Recent Activities</h2>

          <Card className="rounded-xl p-6">
            <ul className="list-disc pl-4">
              <li>Paid $500 for house dues</li>
              <li>Added a new task: "Clean the kitchen"</li>
              <li>John joined the household</li>
            </ul>
          </Card>
        </section>

        {/* Recent Activities Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[24px] font-bold">Recent Activities</h2>

          <Card className="rounded-xl p-6">
            <ul className="list-disc pl-4">
              <li>Paid $500 for house dues</li>
              <li>Added a new task: "Clean the kitchen"</li>
              <li>John joined the household</li>
            </ul>
          </Card>
        </section>
      </section>
    </main>
  );
}
