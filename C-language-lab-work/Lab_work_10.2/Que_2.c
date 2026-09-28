#include<stdio.h>

int stringLength(char str[])
{
    int i = 0;
    while(str[i] != '\0')
    {
        i++;
    }
    return i;
}

void main()
{
    char str[100];
    int len;
    
    printf("Enter any string:- ");
    scanf("%s",str);
    
    len = stringLength(str);
    
    printf("length is :- %d",len);
    
    return 0;
}
