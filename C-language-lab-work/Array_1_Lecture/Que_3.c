#include <stdio.h>

int main()
{
    int a[50], b[50], c[50];
    int n, i;

    printf("Enter array size:- ");
    scanf("%d", &n);

    printf("Enter array A's elements:- \n");
    for(i = 0; i < n; i++)
    {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    printf("\nEnter array B's elements:- \n");
    for(i = 0; i < n; i++)
    {
        printf("b[%d] = ", i);
        scanf("%d", &b[i]);
    }
   
    for(i = 0; i < n; i++)
    {
        c[i] = a[i] + b[i];
    }

    printf("\nArray C is:- ");
    for(i = 0; i < n; i++)
    {
        printf("%d ", c[i]);
    }

}
