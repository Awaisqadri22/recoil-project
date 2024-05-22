import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 100,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});
export const messagesAtoms = atom({
  key: "messagesAtoms",
  default: 80,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagesAtomCount = get(messagesAtoms);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagesAtomCount
    );
  },
});
