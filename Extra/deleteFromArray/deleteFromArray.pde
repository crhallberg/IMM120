// Use this function to delete from any array
// Example of use on line 25
Object[] deleteFromArray(Object[] arr, int index) {
  for (int i=index+1; i<arr.length; i++) {
    arr[i-1] = arr[i];
  }
  shorten(arr);
  return arr;
}
// Copy this one for int arrays, you can change the type as well
int[] deleteFromArray(int[] arr, int index) {
  for (int i=index+1; i<arr.length; i++) {
    arr[i-1] = arr[i];
  }
  shorten(arr);
  return arr;
}

// Two different classes
class Ball {
  int x, y;
}
class Squid {
  boolean inked = false;
  int legs = 8;
}

void setup() {
  Squid[] pets = new Squid[4];
  for (int i=0; i<pets.length; i++) {
    pets[i] = new Squid();
  }
  pets =(Squid[]) deleteFromArray(pets, 2); // Same function
  
  Ball[] circles = new Ball[4];
  for (int i=0; i<circles.length; i++) {
    circles[i] = new Ball();
  }
  circles =(Ball[]) deleteFromArray(circles, 2); 
  
  int[] x = new int[4];
  for (int i=0; i<x.length; i++) {
    x[i] = i;
  }
  x =(int[]) deleteFromArray(x, 2);
}