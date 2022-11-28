import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface PropsList {
  array: number[];
}
export default function List(props: PropsList) {
  return (
    <div>
      {props.array.map((num, index): JSX.Element => {
        return (
          <Card key={index} sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography variant="h3">
                {num}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
