import NavBack from "../nav/NavBack";

type NavFooterLayoutProps = {
  children: React.ReactNode;
};
export default function LayoutInnerPage({ children }: NavFooterLayoutProps) {
  return (
    <>
      <main className="h-screen w-screen overflow-hidden grid grid-cols-1 grid-rows-[auto_auto_minmax(0,1fr)]">
        <section className="bg-tertiary h-5"></section>
        <NavBack />
        <div className="bg-secondary overflow-y-scroll overflow-x-hidden w-full pb-container pt-card">
          {children}
        </div>
      </main>
    </>
  );
}
