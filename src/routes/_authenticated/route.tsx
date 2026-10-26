import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { auth } from "@/lib/firebase";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    // Wait briefly for auth initialization if needed
    if (!auth.currentUser) {
      await new Promise<void>((resolve) => {
        const unsubscribe = auth.onAuthStateChanged(() => {
          unsubscribe();
          resolve();
        });
        setTimeout(resolve, 300);
      });
    }
    if (!auth.currentUser) throw redirect({ to: "/auth" });
  },
  component: () => <Outlet />,
});
