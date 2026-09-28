#include<iostream>

using namespace std;

class Cafe{
	
	private:
	
		int id;
		string name;
		string type;
		int rating;
		string location;
		int estyear;
		int staqu;
	
	public:
		
		Cafe(){
			id = 0;
			name = "";
			type = "";
			rating = 0;
			location = "";
			estyear = 0;
			staqu = 0;	
		}
		
		Cafe(int id, string name, string type, int rating, string location, int estyear, int staqu){
	        this->id = id;
	        this->name = name;
	        this->type = type;
	        this->rating = rating;
	        this->location = location;
	        this->estyear = estyear;
	        this->staqu = staqu;
    	}
		
		void print(){
			
			cout << "=============================================================" << endl;

	        cout << "cafe_id :- " << id << endl;
	        cout << "cafe_name :- " << name << endl;
	        cout << "cafe type (like a rooftop or normal) :- " << type << endl;
	        cout << "cafe_rating (like 1 Star, 2 Start, ..., 5 Star) :- " << rating << " Star" << endl;
	        cout << "cafe_location (city name) :- " << location << endl;
	        cout << "cafe_establish Year :- " << estyear << endl;
	        cout << "cafe_staff_quantity :- " << staqu << endl;
	        
			cout << "=============================================================" << endl;
    	}
		
		
		
};

int main(){
	
	int i,n;
	
	cout << "Enter number of cafe :- ";
	cin >> n;
	cout << endl;
	
	for(i=0 ; i<n ; i++){
		
		int id = i+1,rating,estyear,staqu;
		string name,type,location;
		
		cout << "cafe_name :- ";
		cin >> name;
		
		cout << "cafe type (like a rooftop or normal) :- ";
		cin >> type;
		
		cout << "cafe_rating (like 1 Star, 2 Start, ..., 5 Star) :- ";
		cin >> rating;
		
		cout << "cafe_location (city name) :- ";
		cin >> location;
		
		cout << "cafe_establish Year :- ";
		cin >> estyear;
		
		cout << "cafe_staff_quantity :- ";
		cin >> staqu;
		
		Cafe c(id, name, type, rating, location, estyear, staqu);
    	c.print();
				
	}

	return 0;
}