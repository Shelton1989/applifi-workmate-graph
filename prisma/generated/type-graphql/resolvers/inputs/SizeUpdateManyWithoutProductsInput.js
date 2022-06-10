"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateOrConnectWithoutProductsInput_1 = require("../inputs/SizeCreateOrConnectWithoutProductsInput");
const SizeCreateWithoutProductsInput_1 = require("../inputs/SizeCreateWithoutProductsInput");
const SizeScalarWhereInput_1 = require("../inputs/SizeScalarWhereInput");
const SizeUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/SizeUpdateManyWithWhereWithoutProductsInput");
const SizeUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/SizeUpdateWithWhereUniqueWithoutProductsInput");
const SizeUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/SizeUpsertWithWhereUniqueWithoutProductsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeUpdateManyWithoutProductsInput = class SizeUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeCreateWithoutProductsInput_1.SizeCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeCreateOrConnectWithoutProductsInput_1.SizeCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeUpsertWithWhereUniqueWithoutProductsInput_1.SizeUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereUniqueInput_1.SizeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereUniqueInput_1.SizeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereUniqueInput_1.SizeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereUniqueInput_1.SizeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeUpdateWithWhereUniqueWithoutProductsInput_1.SizeUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeUpdateManyWithWhereWithoutProductsInput_1.SizeUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeScalarWhereInput_1.SizeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
SizeUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], SizeUpdateManyWithoutProductsInput);
exports.SizeUpdateManyWithoutProductsInput = SizeUpdateManyWithoutProductsInput;
