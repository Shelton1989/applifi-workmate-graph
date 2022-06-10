"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateOneRequiredWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateOrConnectWithoutOrderLineItemsInput");
const SizeCreateWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateWithoutOrderLineItemsInput");
const SizeUpdateWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpdateWithoutOrderLineItemsInput");
const SizeUpsertWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpsertWithoutOrderLineItemsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeUpdateOneRequiredWithoutOrderLineItemsInput = class SizeUpdateOneRequiredWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput)
], SizeUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateOrConnectWithoutOrderLineItemsInput_1.SizeCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateOrConnectWithoutOrderLineItemsInput_1.SizeCreateOrConnectWithoutOrderLineItemsInput)
], SizeUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpsertWithoutOrderLineItemsInput_1.SizeUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpsertWithoutOrderLineItemsInput_1.SizeUpsertWithoutOrderLineItemsInput)
], SizeUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], SizeUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateWithoutOrderLineItemsInput_1.SizeUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateWithoutOrderLineItemsInput_1.SizeUpdateWithoutOrderLineItemsInput)
], SizeUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "update", void 0);
SizeUpdateOneRequiredWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateOneRequiredWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], SizeUpdateOneRequiredWithoutOrderLineItemsInput);
exports.SizeUpdateOneRequiredWithoutOrderLineItemsInput = SizeUpdateOneRequiredWithoutOrderLineItemsInput;
