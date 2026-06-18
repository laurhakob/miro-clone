"use client";

import { useSyncExternalStore } from "react";

import { RenameModal } from "@/components/modals/rename-modal";

const emptySubscribe = () => () => {};

export const ModalProvider = () => {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,   // client snapshot
    () => false,  // server snapshot
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      <RenameModal />
    </>
  );
};