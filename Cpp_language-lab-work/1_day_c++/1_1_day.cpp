#include<iostream>

using namespace std;

int main(){
	
	int size,sum;
	float ave;
	int a[100];
	
	cout << "Enter array size :- ";
	cin >> size;
	
	cout << "Enter array elements :- " << endl;
	for(int i=0 ; i<size ; i++){
		cout << "a[" << i << "] = ";
		cin >> a[i];
		sum = sum + a[i];
	}
	
	ave = sum / size;
	
	cout << "Average of an array :- " << ave;
	
	
	return 0;
}