#include <stdio.h>

int main(){
	
	//Que 4. print Fibonacci series up to N numbers using a for loop.
	 
    int n, a = 0, b = 1, c, i;
    printf("Enter any number:- ");
    scanf("%d",&n);

    for (i = 3; i <= n; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
}

