import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";

import { ServerIcon } from "../components";
import { auth } from "../firebase";




export default function Home() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <>
      { !user && navigate("/") }
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-discord_serversBg p-3 min-w-max">
          <div className="server-default hover:bg-discord_blue">
            <img src="https://rb.gy/kuaslg" alt="" className="h-5"/>
          </div>
          <hr className="border-gray-700 border w-8 mx-auto"/>
          <ServerIcon image="https://rb.gy/pv26i" />
          <ServerIcon image="https://rb.gy/3x1v3" />
          <ServerIcon image="https://rb.gy/iuc85" />

          <div className="server-default hover:bg-discord_green group">
            <PlusIcon className="text-discord_green h-7 group-hover:text-white"/>
          </div>
        </div>

        <div className="bg-discord_channelsBg flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-900 p-4 hover:bg-discord_serverNameHoverBg cursor-pointer">
            SzymCode Server
            <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          <div className="text-discord_channelText flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3 mr-2"/>
              <h4 className="font-semibold">Channels</h4>
              <PlusIcon className="h-5 ml-auto cursor-pointer hover:text-white"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
