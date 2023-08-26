import { HashtagIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannelInfo } from "../features/channelSlice";

export default function Channel({ id, channelName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setChannel() {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );

    navigate(`/channels/${id}`);
  };

  return (
    <div className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white" onClick={setChannel}>
      <HashtagIcon className="h-5 mr-3" /> {channelName}
    </div>
  );
}