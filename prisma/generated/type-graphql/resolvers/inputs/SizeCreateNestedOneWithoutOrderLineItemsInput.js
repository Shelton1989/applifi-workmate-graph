"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateOrConnectWithoutOrderLineItemsInput");
const SizeCreateWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateWithoutOrderLineItemsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeCreateNestedOneWithoutOrderLineItemsInput = class SizeCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput)
], SizeCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateOrConnectWithoutOrderLineItemsInput_1.SizeCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateOrConnectWithoutOrderLineItemsInput_1.SizeCreateOrConnectWithoutOrderLineItemsInput)
], SizeCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], SizeCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
SizeCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], SizeCreateNestedOneWithoutOrderLineItemsInput);
exports.SizeCreateNestedOneWithoutOrderLineItemsInput = SizeCreateNestedOneWithoutOrderLineItemsInput;
