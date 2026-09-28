#include<iostream>

using namespace std;

class Cricket{
	
	public: 
		
		void getTotalOvers(){
			cout << "Total Overs in Cricket Match" << endl;
		}
		
};
		
class T20Match : public Cricket{
	public:
    	void getTotalOvers(){
			cout << "Total Overs in T20 Match = 20" << endl;
	}	
};

class TestMatch : public Cricket{
	public:
    	void getTotalOvers(){
        	cout << "Total Overs in Test Match = 90 per day" << endl;	
    }

};

int main(){
	
	T20Match t20;
	TestMatch test;
	
	t20.getTotalOvers();
	test.getTotalOvers();
	
	return 0;
}