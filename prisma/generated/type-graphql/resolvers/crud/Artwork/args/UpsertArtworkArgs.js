"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateInput_1 = require("../../../inputs/ArtworkCreateInput");
const ArtworkUpdateInput_1 = require("../../../inputs/ArtworkUpdateInput");
const ArtworkWhereUniqueInput_1 = require("../../../inputs/ArtworkWhereUniqueInput");
let UpsertArtworkArgs = class UpsertArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], UpsertArtworkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateInput_1.ArtworkCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateInput_1.ArtworkCreateInput)
], UpsertArtworkArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateInput_1.ArtworkUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateInput_1.ArtworkUpdateInput)
], UpsertArtworkArgs.prototype, "update", void 0);
UpsertArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertArtworkArgs);
exports.UpsertArtworkArgs = UpsertArtworkArgs;
