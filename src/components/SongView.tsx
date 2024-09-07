import { Box, Flex, ScrollArea, Text } from "@mantine/core";
import SongCards from "./SongCards";
import { track } from "../types/types";

interface SongViewProps {
  data: track[];
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
}

function SongView({ data, error, isError, isFetching }: SongViewProps) {
  return (
    <Box
      h={{
        base: "calc(100vh - 50px)",
        sm: "calc(100vh - 80px)",
        lg: "calc(100vh - 100px)",
      }}
    >
      {isError ? (
        <Flex style={{ height: "100%" }} justify={"center"} align={"center"}>
          <Text>{error?.message}</Text>
        </Flex>
      ) : isFetching ? (
        <ScrollArea style={{ height: "100%" }}>
          <SongCards isFetching={isFetching} />
        </ScrollArea>
      ) : data ? (
        <ScrollArea style={{ height: "100%" }}>
          <SongCards data={data} isFetching={isFetching} />
        </ScrollArea>
      ) : (
        <Flex style={{ height: "100%" }} justify={"center"} align={"center"}>
          <Text>Search by song title or artist</Text>
        </Flex>
      )}
    </Box>
  );
}

export default SongView;
