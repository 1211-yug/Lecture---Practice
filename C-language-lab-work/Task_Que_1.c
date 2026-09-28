#include <stdio.h>

int main()
{
    int s;
    int a[100];

    printf("Enter array size: ");
    scanf("%d", &s);

    for(int i = 0; i < s; i++)
    {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    printf("\nArray in reverse order:\n");
    
    for(int i=s-1 ; i>=0 ; i--)
    {
        printf("%d ", a[i]);
    }

}

