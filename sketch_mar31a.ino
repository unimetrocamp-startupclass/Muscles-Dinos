// int pushbutton = 2; 

// void setup() {
//   pinMode(pushbutton, INPUT_PULLUP);
//   Serial.begin(9600); 
// }

// void loop() {
//   if (digitalRead(pushbutton) == LOW) {
//     Serial.println("SPACE");
//     delay(300);
//   }
// }

const int threshold = 530; // Defina um limiar de teste (ajustar após testes)
int ecgValue = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  ecgValue = analogRead(A0);
  Serial.println(ecgValue);

  if (ecgValue > threshold) {
    Serial.println("MUSCLE ACTIVATED");
  }

  delay(1500);
}

