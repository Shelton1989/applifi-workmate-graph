"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateManyWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutItemsInput_1 = require("../inputs/MealCreateOrConnectWithoutItemsInput");
const MealCreateWithoutItemsInput_1 = require("../inputs/MealCreateWithoutItemsInput");
const MealScalarWhereInput_1 = require("../inputs/MealScalarWhereInput");
const MealUpdateManyWithWhereWithoutItemsInput_1 = require("../inputs/MealUpdateManyWithWhereWithoutItemsInput");
const MealUpdateWithWhereUniqueWithoutItemsInput_1 = require("../inputs/MealUpdateWithWhereUniqueWithoutItemsInput");
const MealUpsertWithWhereUniqueWithoutItemsInput_1 = require("../inputs/MealUpsertWithWhereUniqueWithoutItemsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateManyWithoutItemsInput = class MealUpdateManyWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateWithoutItemsInput_1.MealCreateWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutItemsInput_1.MealCreateOrConnectWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpsertWithWhereUniqueWithoutItemsInput_1.MealUpsertWithWhereUniqueWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpdateWithWhereUniqueWithoutItemsInput_1.MealUpdateWithWhereUniqueWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpdateManyWithWhereWithoutItemsInput_1.MealUpdateManyWithWhereWithoutItemsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereInput_1.MealScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutItemsInput.prototype, "deleteMany", void 0);
MealUpdateManyWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateManyWithoutItemsInput", {
        isAbstract: true
    })
], MealUpdateManyWithoutItemsInput);
exports.MealUpdateManyWithoutItemsInput = MealUpdateManyWithoutItemsInput;
