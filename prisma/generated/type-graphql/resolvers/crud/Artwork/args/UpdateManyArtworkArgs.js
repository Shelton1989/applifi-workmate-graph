"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyMutationInput_1 = require("../../../inputs/ArtworkUpdateManyMutationInput");
const ArtworkWhereInput_1 = require("../../../inputs/ArtworkWhereInput");
let UpdateManyArtworkArgs = class UpdateManyArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyMutationInput_1.ArtworkUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyMutationInput_1.ArtworkUpdateManyMutationInput)
], UpdateManyArtworkArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], UpdateManyArtworkArgs.prototype, "where", void 0);
UpdateManyArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyArtworkArgs);
exports.UpdateManyArtworkArgs = UpdateManyArtworkArgs;
