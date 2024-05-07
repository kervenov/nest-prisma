import { ApiProperty } from "@nestjs/swagger";

export class GetAllBooksDto {
    @ApiProperty({
        required: false,
        default: 20,
        type: Number,
    })
    limit: number;

    @ApiProperty({
        required: false,
        default: 0,
        type: Number,
    })
    offset: number;

    @ApiProperty({
        required: false,
        isArray: true,
        type: Array,
    })
    category: string[];

    @ApiProperty({ required: false })
    keyword: string;
}