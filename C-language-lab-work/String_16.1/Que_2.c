#include <stdio.h>

void main()
{
    char str[100];
    int i=0;

    printf("Enter any string:- ");
    scanf("%[^\n]",&str);

    for(int i = 0; i<=100 ; i++)
    {
        if(str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;
        }
    }

    printf("\nLowercase string:- %s", str);
}
