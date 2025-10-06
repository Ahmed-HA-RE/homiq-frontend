import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from '../mantine-themes/mantine.module.css';

type ServerErrorProps = {
  status: number;
  message: string;
  details: string;
  stack: string | undefined;
};

const ErrorPage = ({ status, message, stack, details }: ServerErrorProps) => {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>{status}</div>
        <Title className={classes.title}>{message}</Title>
        <Text size='lg' ta='center' className={classes.description}>
          {import.meta.env.DEV ? stack : details}
        </Text>
        <Group justify='center'>
          <Button
            onClick={() => window.location.reload()}
            variant='white'
            size='md'
          >
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default ErrorPage;
