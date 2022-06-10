"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkWhereUniqueInput_1 = require("../../../inputs/ArtworkWhereUniqueInput");
let FindUniqueArtworkArgs = class FindUniqueArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], FindUniqueArtworkArgs.prototype, "where", void 0);
FindUniqueArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueArtworkArgs);
exports.FindUniqueArtworkArgs = FindUniqueArtworkArgs;
