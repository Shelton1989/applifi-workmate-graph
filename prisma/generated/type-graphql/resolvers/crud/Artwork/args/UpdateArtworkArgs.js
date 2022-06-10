"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateInput_1 = require("../../../inputs/ArtworkUpdateInput");
const ArtworkWhereUniqueInput_1 = require("../../../inputs/ArtworkWhereUniqueInput");
let UpdateArtworkArgs = class UpdateArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateInput_1.ArtworkUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateInput_1.ArtworkUpdateInput)
], UpdateArtworkArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], UpdateArtworkArgs.prototype, "where", void 0);
UpdateArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateArtworkArgs);
exports.UpdateArtworkArgs = UpdateArtworkArgs;
