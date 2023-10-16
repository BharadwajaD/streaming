interface IRTP{
    chunk_size: number //no of bits per chunk
    payload: number
    encode(info : number[]): number[][];
}

interface IFEC{
    grp_size: number
    fec(chunks: IRTP[]): IRTP[][]; //creates a parity packet and returns array of grp_size+1 packets
    defec(packets: IRTP[][]): IRTP[];
}


class XORing implements IFEC{
    grp_size: number = 3;

    fec(chunks: IRTP[]): IRTP[][] {
        let xored_packets : IRTP[][]
        let cnt = 0;

        for(let i = 0; i < chunks.length; i+= this.grp_size){
            const chunk = chunks.slice(i, i+this.grp_size);
            const xor_pack = chunk.reduce((xor, c) => xor ^ c.payload, 0)
        }


        throw new Error("Method not implemented.");
    }

    defec(packets: IRTP[][]): IRTP[] {
        throw new Error("Method not implemented.");
    }
}
