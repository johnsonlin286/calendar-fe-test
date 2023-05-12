import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { eventActons } from "@/stores/redux/event";
import Layout from "@/components/Layout";

export default function Home() {
  const { event } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(eventActons.storeEvent({ payload: { name: "tesing" } }));
  }, []);

  const clearToggle = () => {
    dispatch(eventActons.clearStore());
  };

  return (
    <Layout>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <button onClick={clearToggle}>clear store</button>
    </Layout>
  );
}
