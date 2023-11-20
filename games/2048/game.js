export default class Game {
    constructor() {
        this.status = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.game_over = false;
        this.random_spawn();
        this.random_spawn();
    }

    random_spawn() {
        while (true) {
            let i = Math.floor(Math.random() * 4);
            let j = Math.floor(Math.random() * 4);
            if (this.status[i][j] == 0) {
                this.status[i][j] = (Math.random() * 10) % 10 == 1 ? 4 : 2;
                break;
            }
        }

        // Check if there is no 0 in the status
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.status[i][j] == 0) {
                    return;
                }
            }
        }

        // If board is full, check if there are two adjacent equal numbers in the status
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.status[i][j] == this.status[i][j + 1] || this.status[i][j] == (this.status[i + 1] && this.status[i + 1][j])) {
                    return
                }
            }
        }

        this.game_over = true;
    }

    compute_points() {
        return this.status.reduce((acc, row) => acc + row.reduce((acc, x) => acc + x, 0), 0);
    }

    move_array(input_list, start_from = 1) {
        let moved = false;
        for (let i = start_from; i < 4; i++) {
            if (input_list[i] == 0) {
                continue;
            }
            if (input_list[i - 1] == 0) {
                input_list[i - 1] = input_list[i];
                input_list[i] = 0;
                moved = true;
            } else if (input_list[i - 1] == input_list[i]) {
                input_list[i - 1] = input_list[i]*2;
                input_list[i] = 0;
                start_from = i + 1;
            }
        }

        if (moved) {
            return this.move_array(input_list, start_from);
        }

        return false;
    }

    move(direction) {
        const iguales = (array, array2) => {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array2.length; j++) {
                    if(array[i][j] != array2[i][j]){
                        return false
                    }
                }
            }
            return true            
        }
        if (direction !== 'u' && direction !== 'r' && direction !== 'l' && direction !== 'd') {
            return;
        }

        if (this.game_over) {
            return;
        }

        // deep copy the status
        let status_copy = JSON.parse(JSON.stringify(this.status));

        for (let i = 0; i < 4; i++) {
            if (direction == 'u') {
                let input_array = [];
                for (let j = 0; j < 4; j++) {
                    input_array.push(this.status[j][i]);
                }
                this.move_array(input_array);
                for (let j = 0; j < 4; j++) {
                    this.status[j][i] = input_array[j];
                }
            } else if (direction == 'd') {
                let input_array = [];
                for (let j = 0; j < 4; j++) {
                    input_array.push(this.status[3 - j][i]);
                }
                this.move_array(input_array);
                for (let j = 0; j < 4; j++) {
                    this.status[3 - j][i] = input_array[j];
                }
            } else if (direction == 'l') {
                this.move_array(this.status[i]);
            } else if (direction == 'r') {
                this.status[i].reverse();
                this.move_array(this.status[i]);
                this.status[i].reverse();
            }

        }

        // check if status changed
        if (!iguales(status_copy, this.status)) {
            this.random_spawn();
        }
    }
}
