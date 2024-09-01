import { Flex } from "@mantine/core";
import SongSearch from "./SongSearch";
import SongList from "./SongList";

function MainView() {
  return (
    <Flex direction={"column"} gap={"sm"}>
      <SongSearch />
      <SongList />
    </Flex>
  );
}

export default MainView;
