#include <stdio.h>

int main() 
{
    int i, j, s, n = 5;

    for (i = n; i >= 1; i--) 
	{
        for (j = 1; j <= i; j++) 
		printf("%d ", j);
		
        for (s = 1; s <= 2 * (n - i); s++) 
		printf("  ");
		
        for (j = i; j >= 1; j--) 
		printf("%d ", j);
		
        printf("\n");
    }

    for (i = 2; i <= n; i++) 
	{
        for (j = 1; j <= i; j++) 
		printf("%d ", j);
		
        for (s = 1; s <= 2 * (n - i); s++) 
		printf("  ");
		
        for (j = i; j >= 1; j--) 
		printf("%d ", j);
		
        printf("\n");
    }
    
}