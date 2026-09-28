#include <stdio.h>
#include <string.h>

void main()
{
    char pass[100];
    int i, letter = 0, digit = 0, special = 0;
    
	printf("Password must contain at least one letter, one digit, one special symbol & at least 6 characters.");
	
    printf("\n\nCreate your password: ");
    scanf("%s", pass);

    for (i = 0; i < strlen(pass); i++){
        if ((pass[i] >= 'A' && pass[i] <= 'Z') || (pass[i] >= 'a' && pass[i] <= 'z'))
            letter = 1;
        else if (pass[i] >= '0' && pass[i] <= '9')
            digit = 1;
        else
            special = 1;
    }

    if (strlen(pass) >= 6 && letter == 1 && digit == 1 && special == 1)
        printf("Your password is strong.");
    else
        printf("Your password is not strong.");

}
