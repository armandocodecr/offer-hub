import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityLogsService } from "@/services";
import { CreateActivityLogsDto, UpdateActivityLogsDto } from '@/dtos';


@Controller('activityLogs')
export class ActivityLogsController {
    constructor(private readonly service: ActivityLogsService) {}

    @Post()
    async create(@Body() dto: CreateActivityLogsDto) {
        return await this.service.create(dto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.service.findById(id);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateActivityLogsDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}