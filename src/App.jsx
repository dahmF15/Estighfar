import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const zero = () => {
    setCount(0);
  };

  return (
    <Container maxWidth="sm" style={{ direction: 'rtl' }}>
      <Card sx={{ minWidth: 275, height: '200px' }} style={{ backgroundColor: '#333', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
        <CardContent>
          <Typography style={{ color: '#ffffff', fontSize: '24px', textAlign: 'center' }}>
            عدد مرات الاستغفار: {count}
          </Typography>
        </CardContent>

        <CardActions style={{ justifyContent: 'space-around', marginTop: '50px' }}>
          <Button 
            size="large" 
            variant="contained" 
            onClick={increase} 
            style={{ backgroundColor: '#000', color: 'white', borderRadius: '20px', fontSize: '18px' }}
          >
            استغفر الله
          </Button>
          <Button 
            size="large" 
            variant="outlined" 
            onClick={zero} 
            style={{ color: '#fff', borderRadius: '20px', fontSize: '18px', borderColor: '#000' }}
          >
            إعادة تعيين
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;