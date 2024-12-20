"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface SidenavProps {
  open?: boolean;
  width?: number;
  position?: "left" | "right";
  children: React.ReactNode;
  toggleSidenav?: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({
  open = false,
  width = 280,
  position = "right",
  children,
  toggleSidenav,
}) => {
  const [sidenavOpen, setSidenavOpen] = useState(open);

  useEffect(() => {
    setSidenavOpen(open);
  }, [open]);

  const handleClose = () => {
    toggleSidenav?.();
    setSidenavOpen(false);
  };

  if (typeof window === "undefined") return null;

  const sidenav = document.querySelector("#sidenav-root") || document.createElement("div");

  if (!document.body.contains(sidenav)) {
    sidenav.setAttribute("id", "sidenav-root");
    document.body.appendChild(sidenav);
  }

  return createPortal(
    sidenavOpen ? (
      <div
        className={`fixed top-0 ${position}-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          sidenavOpen ? "translate-x-0" : position === "right" ? "translate-x-full" : "-translate-x-full"
        }`}
        style={{ width: `${width}px` }}
      >
        <div className="h-full flex flex-col">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 self-end m-4"
          >
            <i className="pi pi-times text-xl"></i>
          </button>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    ) : null,
    sidenav
  );
};

export default Sidenav;

