#include <stdio.h>

int main()
{
    int a[50], n, i;

    printf("Enter array size: ");
    scanf("%d", &n);

    printf("Enter array elements:\n");
    for(i = 0; i < n; i++)
    {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    printf("\nLength of an Array: %d", n);

}

