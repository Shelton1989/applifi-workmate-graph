"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateOrConnectWithoutOrderLineItemsInput");
const ArtworkCreateWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateWithoutOrderLineItemsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkCreateNestedOneWithoutOrderLineItemsInput = class ArtworkCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput)
], ArtworkCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateOrConnectWithoutOrderLineItemsInput_1.ArtworkCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateOrConnectWithoutOrderLineItemsInput_1.ArtworkCreateOrConnectWithoutOrderLineItemsInput)
], ArtworkCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
ArtworkCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ArtworkCreateNestedOneWithoutOrderLineItemsInput);
exports.ArtworkCreateNestedOneWithoutOrderLineItemsInput = ArtworkCreateNestedOneWithoutOrderLineItemsInput;
