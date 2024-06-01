import { Container, Group } from "@mantine/core";
import classes from "./index.module.css";

const links = [
  {
    link: "https://github.com/kadoshita/datastore-storage-size-calculator",
    label: "GitHub",
  },
];

export function Header() {
  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h1>Datastore storage size calculator</h1>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}
