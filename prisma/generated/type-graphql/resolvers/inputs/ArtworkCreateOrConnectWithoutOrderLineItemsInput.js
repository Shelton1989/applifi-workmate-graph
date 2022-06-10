"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateWithoutOrderLineItemsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkCreateOrConnectWithoutOrderLineItemsInput = class ArtworkCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput)
], ArtworkCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
ArtworkCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ArtworkCreateOrConnectWithoutOrderLineItemsInput);
exports.ArtworkCreateOrConnectWithoutOrderLineItemsInput = ArtworkCreateOrConnectWithoutOrderLineItemsInput;
