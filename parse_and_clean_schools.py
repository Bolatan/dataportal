import csv
import json
import re

def create_school_list_js(csv_file_path, js_file_path):
    schools = []
    with open(csv_file_path, mode='r', encoding='utf-8') as infile:
        reader = csv.reader(infile)
        header = next(reader)  # Skip header row
        for row in reader:
            if len(row) == 4:
                lga, ward, school_name, school_code = row

                # Clean the data
                lga = lga.strip()
                ward = ward.strip()
                school_code = school_code.strip()

                # Remove school code from school name
                school_name = re.sub(r'\s*\(\d+\)$', '', school_name).strip()

                schools.append({
                    "lga": lga,
                    "ward": ward,
                    "schoolName": school_name,
                    "schoolCode": school_code
                })

    with open(js_file_path, mode='w', encoding='utf-8') as outfile:
        outfile.write("const schools = ")
        json.dump(schools, outfile, indent=4)
        outfile.write(";")

if __name__ == '__main__':
    create_school_list_js('SCHOOL LIST FOR ASC.csv', 'schools.js')