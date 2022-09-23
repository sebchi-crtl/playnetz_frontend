import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/button/button";
import CustomInput from "../../components/customInput/customInput";
import PlaynetzLogo from "../../components/logo/logo";
import { BsFacebook } from "react-icons/bs";

export default function SignIn() {
  const valueChange = () => {};

  return (
    <div className="bg-[#050F14]">
      <Head>
        <title>Playnetz || SignIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen min-h-screen p-6 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[1440px]">
            <div className="w-full">
              <Link href="/" passHref>
                <a>
                  <PlaynetzLogo width={120} height={29} />
                </a>
              </Link>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="w-full md:max-w-[50%] lg:max-w-[30%] p-4 shadow-md rounded-md">
                <h2 className="text-white text-4xl font-bold">Sign In</h2>
                {/* form */}
                <div className="flex items-center w-full mt-4">
                  <form className="w-full flex flex-col gap-6">
                    <div className="w-full">
                      <CustomInput
                        placeholder="email"
                        name="email"
                        type="email"
                        onChange={valueChange}
                      />
                    </div>
                    <div className="w-full">
                      <CustomInput
                        placeholder="password"
                        name="password"
                        type="password"
                        onChange={valueChange}
                      />
                    </div>
                    <div className="w-full">
                      <CustomInput
                        className="w-auto accent-[#33A4D8]"
                        name="rememberme"
                        type="checkbox"
                        checked
                        onChange={valueChange}
                      />
                      <label htmlFor="rememberme" className="text-white ml-4">
                        Remember me
                      </label>
                    </div>
                    <div className="w-full">
                      <Button className="w-full">Sign In</Button>
                    </div>
                    <div className="w-full">
                      <Link href="/auth/forgotPaassword" passHref>
                        <a className="text-[#33A4D8] text-md">
                          Forgot Password?
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
                {/* form */}

                <div className="my-4">
                  <p className="capitalize text-center text-white text-base">
                    Or
                  </p>
                </div>
                <div>
                  <Button className="w-full font-medium flex gap-4 items-center justify-center">
                    {
                      <>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_362_17)">
                            <path
                              d="M32 16C32 7.1635 24.8365 0 16 0C7.1635 0 0 7.16337 0 16C0 23.986 5.851 30.6054 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6054 32 23.9861 32 16Z"
                              fill="#1877F2"
                            />
                            <path
                              d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7332 19.1199 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.327 31.9352 15.1629 32.0002 16 32C16.8371 32.0002 17.673 31.9353 18.5 31.8056V20.625H22.2281Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_362_17">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </>
                    }
                    Sign in with facebook
                  </Button>
                </div>
                <div className="flex mt-4 justify-center items-center">
                  <p className="text-white font-light text-sm">
                    Your first time?
                  </p>
                  <Link href="/auth/signUp" passHref>
                    <a className="font-medium text-white ml-2">Sign Up</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
