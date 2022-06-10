"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateOrConnectWithoutProductsInput_1 = require("../inputs/SizeCreateOrConnectWithoutProductsInput");
const SizeCreateWithoutProductsInput_1 = require("../inputs/SizeCreateWithoutProductsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeCreateNestedManyWithoutProductsInput = class SizeCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeCreateWithoutProductsInput_1.SizeCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeCreateOrConnectWithoutProductsInput_1.SizeCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereUniqueInput_1.SizeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
SizeCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], SizeCreateNestedManyWithoutProductsInput);
exports.SizeCreateNestedManyWithoutProductsInput = SizeCreateNestedManyWithoutProductsInput;
