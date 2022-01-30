# codeup 기초 100제 java편

## 1번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

## 2번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

## 3번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello\nWorld");
    }
}
```

## 4번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("'Hello'");
    }
}
```

## 5번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("\"Hello World\"");
    }
}
```

## 6번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("\"!@#$%^&*()\"");
    }
}
```

## 7번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("\"C:\\Download\\hello.cpp\"");
    }
}
```

## 8번
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("\u250c\u252c\u2510");
        System.out.println("\u251c\u253c\u2524");
        System.out.println("\u2514\u2534\u2518");
    }
}
```

## 10번
``'java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(sc.next());
    }
}
```

## 11번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(sc.next().charAt(0));
    }
}
```

## 12번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float a = sc.nextFloat();
        sc.close(); //Scanner종료 자원해제
        System.out.printf("%f\n",a);
    }
}
```
## 13번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        sc.close(); //Scanner종료 자원해제
        System.out.printf(a+" "+b);
    }
}
```

## 14번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char a = sc.next().charAt(0);
        char b = sc.next().charAt(0);
        sc.close(); //Scanner종료 자원해제
        System.out.printf(b+" "+a);
    }
}
```

## 15번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float a  = sc.nextFloat();
        sc.close(); //Scanner종료 자원해제
        System.out.printf("%.2f",a);
    }
}
```

## 17번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a  = sc.nextInt();
        sc.close(); //Scanner종료 자원해제
        System.out.printf(a + " " + a + " " + a);
    }
}
```

## 18번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String[] b = a.split(":");
        sc.close(); //Scanner종료 자원해제
        System.out.printf("%d:%d",Integer.parseInt(b[0]),Integer.parseInt(b[1]));
    }
}
```

## 19번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String u = sc.next();
        StringTokenizer a = new StringTokenizer(u,".");
        int[] b = new int[3];
        int i=0;
        while(a.hasMoreTokens()){
            b[i]=Integer.parseInt(a.nextToken());
            i++;
        }
        sc.close(); //Scanner종료 자원해제
        System.out.printf("%04d.%02d.%02d",b[0],b[1],b[2]);
    }
}
```

### 20번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String[] b = a.split("-");
        System.out.printf("%s%s",b[0],b[1]);
    }
}
```

## 21번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        System.out.println(a);
    }
}
```

## 22번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        System.out.println(a);
    }
}
```

## 23번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String[] b = a.split("\\.");
        System.out.printf("%s\n%s",b[0],b[1]);
    }
}
```

## 24번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String[] b = a.split("");
        for(int i=0;i<b.length;i++){
            System.out.printf("'%s'\n",b[i]);
        }
    }
}
```

## 25번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        System.out.println("["+(a/10000)*10000+"]\n["+(a/1000%10)*1000+"]\n["+(a/100%10)*100+"]\n["+(a/10%10)*10+"]\n["+a%10+"]");
    }
}
```

## 26번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        StringTokenizer st = new StringTokenizer(a,":");
        String[] str = new String[3];
        int i=0;
        while(st.hasMoreTokens()){
            str[i] = st.nextToken();
            i++;
        }
        int min = Integer.parseInt(str[1]);
        System.out.println(min);
    }
}
```

## 27번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        String[] b = a.split("\\.");
        System.out.printf("%s-%s-%s",b[2],b[1],b[0]);
    }
}
```

## 28번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();

        System.out.println(a);
    }
}
```

## 29번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();

        System.out.printf("%.11f",a);
    }
}
```

## 30번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();

        System.out.println(a);
    }
}
```

## 31번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();

        System.out.printf("%o",a);
    }
}
```

## 32번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();

        System.out.printf("%x",a);
    }
}
```

## 33번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();

        System.out.printf("%x",a);
    }
}
```
## 34번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        int b = Integer.parseInt(a,16);

        System.out.println(Integer.toOctalString(b));
    }
}
```

## 36번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Character a = sc.next().charAt(0);

        System.out.println((int)a);
    }
}
```

## 37번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();

        System.out.println((char)a);
    }
}
```

## 38번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextInt();
        long b = sc.nextInt();
        System.out.println(a+b);
    }
}
```

## 39번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();
        long b = sc.nextLong();
        System.out.println(a+b);
    }
}
```

## 40번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();

        System.out.printf("%d",-a);
    }
}
```

## 41번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Character a = sc.next().charAt(0);
        
        System.out.println((char)((int)a+1));
    }
}
```

## 42번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a/b);
    }
}
```

## 43번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a%b);
    }
}
```

## 44번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();

        System.out.println(++a);
    }
}
```

## 45번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();
        double c = (double)a; 
        System.out.println(a+b);
        System.out.println(a-b);
        System.out.println(a*b);
        System.out.println(a/b);
        System.out.println(a%b);
        System.out.printf("%.2f",c/b);
    }
}
```

## 46번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        double d = (double)a;

        System.out.println(a+b+c);
        System.out.printf("%.1f",(d+b+c)/3);
    }
}
```

## 47번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();

        System.out.println(a<<1);
    }
}
```

## 48번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a<<b);
    }
}
```

## 49번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if(a>b){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 50번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if(a==b){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 51번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if(a<=b){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 52번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if(a!=b){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 53번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();

        if(a==0){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```
## 54번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if(a==1 && b==1){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 55번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if(a==1 || b==1){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 56번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if((a==1 && b==0)||(a==0&&b==1)){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 57번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if((a==1 && b==1)||(a==0&&b==0)){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 58번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        if((a==0&&b==0)){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}
```

## 59번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        
        System.out.println(~a);
    }
}
```

## 60번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a&b);
    }
}
```

## 61번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a|b);
    }
}
```

## 62번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a^b);
    }
}
```

## 63번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();

        System.out.printf("%d",a>b ? a:b);
    }
}
```

## 64번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        System.out.printf("%d",(a>b ? b:a)>c? c:(a>b ? b:a));
    }
}
```

## 65번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if(a%2 ==0){
            System.out.println(a);
        }
        if(b%2 ==0){
            System.out.println(b);
        }
        if(c%2 ==0){
            System.out.println(c);
        }
    }
}
```

## 66번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if(a%2 ==0){
            System.out.println("even");
        }
        else{
            System.out.println("odd");
        }
        if(b%2 ==0){
            System.out.println("even");
        }
        else{
            System.out.println("odd");
        }
        if(c%2 ==0){
            System.out.println("even");
        }
        else{
            System.out.println("odd");
        }
    }
}
```

## 67번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =sc.nextInt();


        if(a>0){
            System.out.println("plus");
            if(a%2==0){
                System.out.println("even");
            }
            else {
                System.out.println("odd");
            }
        }
        else{
            System.out.println("minus");
            if(a%2==0){
                System.out.println("even");
            }
            else {
                System.out.println("odd");
            }
        }
    }
}
```

## 68번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();


        if (a >= 90) {
            System.out.println("A");
        } else if (a >= 70) {
            System.out.println("B");
        } else if (a >= 40) {
            System.out.println("C");
        } else {
            System.out.println("D");
        }
    }
}
```

## 69번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();

        switch (a) {
            case "A": {
                System.out.println("best!!!");
                break;
            }
            case "B": {
                System.out.println("good!!");
                break;
            }
            case "C": {
                System.out.println("run!");
                break;
            }
            case "D": {
                System.out.println("slowly~");
                break;
            }
            default:
                System.out.println("what?");
                break;
        }
    }
}
```

## 70번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();

        switch (a) {
            case 12:
                System.out.println("winter");
                break;
            case 1:
                System.out.println("winter");
                break;
            case 2:
                System.out.println("winter");
                break;
            case 3:
                System.out.println("spring");
                break;
            case 4:
                System.out.println("spring");
                break;
            case 5:
                System.out.println("spring");
                break;
            case 6:
                System.out.println("summer");
                break;
            case 7:
                System.out.println("summer");
                break;
            case 8:
                System.out.println("summer");
                break;
            case 9:
                System.out.println("fall");
                break;
            case 10:
                System.out.println("fall");
                break;
            case 11:
                System.out.println("fall");
                break;
        }
    }
}
```

## 71번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true){
            int a = sc.nextInt();
            if(a!=0){
                System.out.println(a);
            }
            else{
                break;
            }
        }
    }
}
```

## 72번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true){
            int a = sc.nextInt();
            if(a==0){
                break;
            }
            else{
                System.out.println(a);
            }
        }
    }
}
```

## 74번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        while (a!=0){
            System.out.println(a);
            a--;
        }
    }
}
```

## 75번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        while (a!=0){
            System.out.println(a-1);
            a--;
        }
    }
}
```

## 76번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char a = sc.next().charAt(0);
        char b = 'a';
        while (b<=a){
            System.out.print(b+" ");
            b++;
        }
    }
}
```

## 77번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = 0;
        while (a>=b){
            System.out.println(b);
            b++;
        }
    }
}
```

## 78번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int sum = 0;

        for(int i=0;i<=a;i++){
            if(i%2==0) {
                sum = sum + i;
            }
        }
        System.out.println(sum);
    }
}
```

## 79번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true){
            char a = sc.next().charAt(0);
            if(a=='q'){
                System.out.println(a);
                break;
            }
            else {
                System.out.println(a);
            }
        }
    }
}
```

## 80번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b=1;
        int sum =0;
        while (true){
            sum = sum+b;
            if(sum>=a){
                System.out.println(b);
                break;
            }
            b++;
        }
    }
}
```

## 81번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        for(int i = 0; i<a;i++){
            for (int j =0;j<b;j++){
                System.out.println((i+1)+" "+(j+1));
            }
        }
    }
}
```

## 82번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(16);
        for(int i = 1; i<16;i++){
            System.out.printf("%X*%X=%X\n",a,i,a*i);
        }
    }
}
```

## 83번
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        for(int i = 1; i<=a;i++){
            if(i%3==0){
                System.out.print("X ");
            }
            else{
                System.out.print(i+" ");
            }
        }
    }
}
```

## 84번
```java
import java.io.*;
import java.util.*;


public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String s = br.readLine();
        String[] str = s.split(" ");
        int count = 0;
        for(int i = 0; i<Integer.valueOf(str[0]);i++) {
            for (int j =0;j<Integer.valueOf(str[1]);j++){
                for(int k = 0;k<Integer.valueOf(str[2]);k++){
                    bw.write(i + " "+ j+ " "+k+"\n");
                    count++;
                }
            }
        }
        bw.write(String.valueOf(count));
        bw.flush();
    }
}
```

## 85번
```java
import java.util.*;

class Main {  
  public static void main(String args[]) { 
    Scanner sc = new Scanner(System.in);
    double h = sc.nextInt();
    double b = sc.nextInt();
    double c = sc.nextInt();
    double s = sc.nextInt();

    double result = (h*b*c*s)/1024/1024/8;
    System.out.printf("%.1f MB",result);
    
  } 
}
```

## 86번
```java
import java.util.*;

class Main {  
  public static void main(String args[]) { 
    Scanner sc = new Scanner(System.in);
    double w = sc.nextInt();
    double h = sc.nextInt();
    double b = sc.nextInt();

    double result = (w*h*b)/1024/1024/8;
    System.out.printf("%.2f MB",result);
    
  } 
}
```

## 87번
```java
import java.util.*;

class Main {  
  public static void main(String args[]) { 
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int i=0;
    int b = 1;
    while(true){
        i=i+b;
        if(i>=a){
            System.out.println(i);
            break;
        }
        b++;
    }
  } 
}
```

## 88번
```java
import java.util.*;

class Main {  
  public static void main(String args[]) { 
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b=1;
    while(true){
        if(b%3==0){
        }
        else{
            System.out.printf("%d ",b);
        }
        if(a<=b){
            break;
        }
        b++;
    }
  } 
}
```


