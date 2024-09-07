import { Group, Text, Skeleton, Image, Card, Grid } from "@mantine/core";
import { track } from "../types/types";

interface SongCardsProps {
  data?: track[] | undefined;
  isFetching?: boolean;
}

function SongCards({ data, isFetching }: SongCardsProps) {
  return (
    <Grid>
      {data?.map((item) => (
        <Grid.Col
          span={{ base: 12, sm: 6, md: 4, lg: 3 }}
          style={{ height: "auto" }}
          key={item.id}
        >
          <Skeleton visible={isFetching}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={item.album.images[1].url} alt={item.name} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{item.name}</Text>
                <Text>
                  <a
                    href={item.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen on Spotify
                  </a>
                </Text>
              </Group>

              <audio
                src={item.preview_url}
                controls
                style={{ width: "100%" }}
              />
            </Card>
          </Skeleton>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default SongCards;
