"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ArtworkWhereUniqueInput = class ArtworkWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkWhereUniqueInput.prototype, "id", void 0);
ArtworkWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkWhereUniqueInput", {
        isAbstract: true
    })
], ArtworkWhereUniqueInput);
exports.ArtworkWhereUniqueInput = ArtworkWhereUniqueInput;
