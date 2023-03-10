"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateManyWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutLikedByInput_1 = require("../inputs/MealCreateOrConnectWithoutLikedByInput");
const MealCreateWithoutLikedByInput_1 = require("../inputs/MealCreateWithoutLikedByInput");
const MealScalarWhereInput_1 = require("../inputs/MealScalarWhereInput");
const MealUpdateManyWithWhereWithoutLikedByInput_1 = require("../inputs/MealUpdateManyWithWhereWithoutLikedByInput");
const MealUpdateWithWhereUniqueWithoutLikedByInput_1 = require("../inputs/MealUpdateWithWhereUniqueWithoutLikedByInput");
const MealUpsertWithWhereUniqueWithoutLikedByInput_1 = require("../inputs/MealUpsertWithWhereUniqueWithoutLikedByInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateManyWithoutLikedByInput = class MealUpdateManyWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateWithoutLikedByInput_1.MealCreateWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutLikedByInput_1.MealCreateOrConnectWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpsertWithWhereUniqueWithoutLikedByInput_1.MealUpsertWithWhereUniqueWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpdateWithWhereUniqueWithoutLikedByInput_1.MealUpdateWithWhereUniqueWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpdateManyWithWhereWithoutLikedByInput_1.MealUpdateManyWithWhereWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereInput_1.MealScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutLikedByInput.prototype, "deleteMany", void 0);
MealUpdateManyWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateManyWithoutLikedByInput", {
        isAbstract: true
    })
], MealUpdateManyWithoutLikedByInput);
exports.MealUpdateManyWithoutLikedByInput = MealUpdateManyWithoutLikedByInput;
