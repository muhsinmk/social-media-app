import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>

      <img
        src="/assets/images/snapgram-side.jpg"
        alt="logo"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
      />
    </>
  );
};

export default AuthLayout;
