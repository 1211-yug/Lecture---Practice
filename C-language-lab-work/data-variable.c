
#include <stdio.h>

int main() 
{
    //Que1.
    int a = 12, b = 6, sum,sub,mul;
    float divi,mod;
    
    sum = a+b;
    sub = a-b;
    mul = a*b;
    divi = a/b;
    mod = b%a;

    printf("Addition of %d and %d is %d \n", a,b,sum);
    printf("Subtraction of %d and %d is %d \n", a,b,sub);
    printf("Multiplication of %d and %d is %d \n", a,b,mul);
    printf("Division of %d and %d is %f \n", a,b,divi);
    printf("Modulo of %d and %d is %f \n\n", a,b,mod);
    
    
    
    //Que2.
    int c = 5, d = 5, m;
    
    m = c*d;
    
    printf("--------------\n");
    printf("|            |\n");
    printf("| %d * %d = %d |\n",c,d,m);
    printf("|            |\n");
    printf("--------------\n");
}
